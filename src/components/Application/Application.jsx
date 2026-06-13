import React, { useState } from 'react';
import classes from './Application.module.scss';

const Application = () => {
  // Состояния для управления отправкой
  const [loading, setLoading] = useState(false);      // индикатор загрузки
  const [status, setStatus] = useState({ type: '', message: '' });  // сообщение об успехе/ошибке

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyeAqWX_7eWD2Am-mwuB-p4R8rtjPu3rkxSQXjSGc-UwMyj0ckEr6lT-bXFtiNI03mAAw/exec';

  const handleSubmit = async (event) => {
    // 1. Отменяем стандартную отправку формы (перезагрузку страницы)
    event.preventDefault();
    
    // 2. Показываем индикатор загрузки и очищаем предыдущие сообщения
    setLoading(true);
    setStatus({ type: '', message: '' });
    
    // 3. Собираем все данные из формы
    const formData = new FormData(event.target);
    
    try {
      // 4. Отправляем данные на Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData
      });
      
      // 5. Получаем ответ от сервера
      const result = await response.json();
      
      // 6. Проверяем, успешно ли всё прошло
      if (result.result === 'success') {
        setStatus({ 
          type: 'success', 
          message: '✅ Заявка успешно отправлена! Спасибо!' 
        });
        event.target.reset();  // очищаем все поля формы
      } else {
        throw new Error(result.error || 'Неизвестная ошибка');
      }
    } catch (error) {
      // 7. Если что-то пошло не так — показываем ошибку
      console.error('Ошибка при отправке:', error);
      setStatus({ 
        type: 'error', 
        message: '❌ Не удалось отправить заявку. Пожалуйста, попробуйте позже.' 
      });
    } finally {
      // 8. Выключаем индикатор загрузки
      setLoading(false);
    }
  };

  return (
    <div className={classes.application}>
      <h1>Оставить заявку</h1>
      
      {/* Обратите внимание: у формы появился onSubmit */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="FullName"                              // ← КЛЮЧЕВОЙ МОМЕНТ: name совпадает с заголовком в таблице
          placeholder="Фамилия и Имя"
          pattern="[А-ЯЁ][а-яё]*(?:[-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*(?:[-][А-ЯЁ][а-яё]*)?"
          title="Введите фамилию и имя через пробел"
          required
        />
        
        <input 
          type="tel" 
          name="Phone"                                 // ← name="Phone" (как в таблице)
          placeholder="Номер телефона"
          pattern="(\+7|8)\d{10}"
          title="Введите номер в формате +71234567890 или 81234567890"
          required
        />
        
        <div className={classes.check}>
          <p>Даю согласие на обработку персональных данных</p>
          <input 
            type="checkbox" 
            name="Consent"                             // ← name="Consent" (как в таблице)
            required
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Отправка...' : 'Отправить'}
        </button>
      </form>
      
      {/* Сообщение об успехе или ошибке */}
      {status.message && (
        <div className={status.type === 'success' ? classes.success : classes.error}>
          {status.message}
        </div>
      )}
    </div>
  );
};

export default Application;