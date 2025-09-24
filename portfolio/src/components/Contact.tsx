import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
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
      // API Gateway로 전송 (API 키를 헤더에 포함)
      const response = await axios.post(
        'https://example.com/contact',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY  // API 키를 헤더에 포함
          }
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
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="concept-card rounded-xl p-6 sm:p-8">
        <h2 className="responsive-h2 font-bold mb-8 text-center concept-text-primary">
          Contact Me
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 이름 입력 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium concept-text-primary mb-2">
              보내는 이 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 concept-card border border-concept-border-light dark:border-concept-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent concept-text-primary placeholder-gray-400 transition-all duration-200"
              placeholder="이름을 입력해주세요"
            />
          </div>


 {/* 메시지 입력 */}
 <div>
            <label htmlFor="message" className="block text-sm font-medium concept-text-primary mb-2">
              메시지 *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 concept-card border border-concept-border-light dark:border-concept-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent concept-text-primary placeholder-gray-400 transition-all duration-200 resize-none"
              placeholder="메시지를 입력해주세요"
            />
          </div>

          {/* 이메일 입력 */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium concept-text-primary mb-2">
              이메일 *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 concept-card border border-concept-border-light dark:border-concept-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent concept-text-primary placeholder-gray-400 transition-all duration-200"
              placeholder="이메일을 입력해주세요"
            />
          </div>

          {/* 전화번호 입력 (선택사항) */}
          <div>
            <label className="block text-sm font-medium concept-text-primary mb-2">
              전화번호 (Optional)
            </label>
            <div className="phone-input-container">
              <PhoneInput
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                defaultCountry="KR"
                placeholder="전화번호를 입력해주세요"
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
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                전송 중...
              </div>
            ) : (
              '전송하기'
            )}
          </button>

          {/* 상태 메시지 */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
              <p className="text-green-800 dark:text-green-200 text-center font-medium">
                메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
              <p className="text-red-800 dark:text-red-200 text-center font-medium">
                전송 중 오류가 발생했습니다. 다시 시도해주세요.
              </p>
            </div>
          )}
        </form>
      </div>

    </div>
  );
};

export default Contact;
