import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import { useLanguage } from '../contexts/LanguageContext';
import 'react-phone-number-input/style.css';

interface FormData {
  name: string;
  email: string;
  message: string;
  phoneNumber?: string;
}

interface ContactProps {
  className?: string;
}

// API 키 (환경 변수에서 가져오거나 기본값 사용)
const API_KEY = process.env.REACT_APP_API_KEY || 'vpLaHO402z5a8TI8u8kzA3wqZxfKFwh97Nd9uz9d';

const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  const { getText } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    phoneNumber: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value?: string) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value || ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // API Gateway로 전송 (API 키를 헤더에 포함, 1분 타임아웃 설정)
      const response = await axios.post(
        'https://2cn2p4rm4l.execute-api.ap-northeast-2.amazonaws.com/telegram_senders',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY  // API 키를 헤더에 포함
          },
          timeout: 60000  // 1분 (60초) 타임아웃 설정
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          phoneNumber: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // 타임아웃 에러인지 확인
      if (error && typeof error === 'object' && 'code' in error && error.code === 'ECONNABORTED') {
        console.log('Request timed out after 1 minute');
      }
      
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="concept-card rounded-xl p-6 sm:p-8">
    
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 이름 입력 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium concept-text-primary mb-2">
              {getText('c-1')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 concept-card border border-concept-border-light dark:border-concept-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent concept-text-primary placeholder-gray-400 transition-all duration-200"
              placeholder={getText('c-9')}
            />
          </div>


          {/* 메시지 입력 */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium concept-text-primary mb-2">
              {getText('c-4')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 concept-card border border-concept-border-light dark:border-concept-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent concept-text-primary placeholder-gray-400 transition-all duration-200 resize-none"
              placeholder={getText('c-12')}
            />
          </div>

          {/* 이메일 입력 */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium concept-text-primary mb-2">
              {getText('c-2').replace(' *', '')} <span className="text-gray-500 text-xs">({getText('c-13')})</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 concept-card border border-concept-border-light dark:border-concept-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent concept-text-primary placeholder-gray-400 transition-all duration-200"
              placeholder={getText('c-10')}
            />
          </div>

          {/* 전화번호 입력 (선택사항) */}
          <div>
            <label className="block text-sm font-medium concept-text-primary mb-2">
              {getText('c-3')}
            </label>
            <div className="phone-input-container">
              <PhoneInput
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                defaultCountry="KR"
                placeholder={getText('c-11')}
                className="w-full"
                inputComponent={({ className, ...props }) => (
                  <input
                    {...props}
                    className={`w-full px-4 py-3 concept-card border border-concept-border-light dark:border-concept-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent concept-text-primary placeholder-gray-400 transition-all duration-200 ${className || ''}`}
                  />
                )}
                countrySelectComponent={({ value, onChange, options, ...rest }: any) => (
                  <select
                    {...rest}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="bg-transparent border-none outline-none text-gray-600 dark:text-gray-300 mr-2"
                  >
                    {options.map(({ value, label }: { value: string; label: string }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </div>

         

          {/* 전송 버튼 */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'concept-gradient-primary hover:concept-gradient-primary-hover text-white focus:ring-blue-500'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
                  {/* AWS Lambda Icon - Simplified */}
                  <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  <circle cx="12" cy="12" r="1.5" fill="#FF9900" className="animate-pulse"/>
                  <path fill="#FF9900" d="M12 6l-2 4h4l-2-4z"/>
                </svg>
                <span className="text-sm">{getText('c-14')}</span>
              </div>
            ) : (
              getText('c-5')
            )}
          </button>

          {/* 상태 메시지 */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
              <p className="text-green-800 dark:text-green-200 text-center font-medium">
                {getText('c-7')}
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
              <p className="text-red-800 dark:text-red-200 text-center font-medium">
                {getText('c-8')}
              </p>
            </div>
          )}
        </form>
      </div>

    </div>
  );
};

export default Contact;
