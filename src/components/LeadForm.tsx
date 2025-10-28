'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Lock, X } from 'lucide-react';
import { trackLead, trackButtonClick } from '@/lib/fbpixel';

interface LeadFormData {
  nama: string;
  whatsapp: string;
  consent: boolean;
}

interface LeadFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

export default function LeadForm({ onClose, isModal = false }: LeadFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setError('');

    try {
      // Track Lead event
      trackLead();

      // Send data to API (you'll need to implement this endpoint)
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Terjadi kesalahan saat mengirim data');
      }

      // Redirect to thank you page
      router.push(`/terima-kasih?name=${encodeURIComponent(data.nama)}`);
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className={isModal ? 'relative' : ''}>
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      )}

      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Daftar Gratis & Mulai Belajar Hari Ini!
          </h2>
          <p className="text-gray-600">
            Isi form di bawah untuk mendapatkan akses instan ke semua kursus SkillHub Indonesia - 100% GRATIS!
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Nama Lengkap */}
          <div>
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nama"
              {...register('nama', { required: 'Nama lengkap wajib diisi' })}
              placeholder="Masukkan nama lengkap Anda"
              className={`w-full px-4 py-3 border ${
                errors.nama ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-white text-gray-900 placeholder:text-gray-400`}
            />
            {errors.nama && (
              <p className="mt-1 text-sm text-red-500">{errors.nama.message}</p>
            )}
          </div>

          {/* WhatsApp */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
              Nomor WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="whatsapp"
              {...register('whatsapp', {
                required: 'Nomor WhatsApp wajib diisi',
                pattern: {
                  value: /^(\+62|62|0)[0-9]{9,12}$/,
                  message: 'Format nomor tidak valid (contoh: +628123456789)',
                },
              })}
              placeholder="+628123456789"
              className={`w-full px-4 py-3 border ${
                errors.whatsapp ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-white text-gray-900 placeholder:text-gray-400`}
            />
            {errors.whatsapp && (
              <p className="mt-1 text-sm text-red-500">{errors.whatsapp.message}</p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              {...register('consent', { required: 'Anda harus menyetujui syarat dan ketentuan' })}
              className="mt-1 h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35] border-gray-300 rounded"
            />
            <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
              Saya setuju dengan{' '}
              <a href="/syarat-ketentuan" className="text-[#FF6B35] hover:underline" target="_blank">
                Syarat & Ketentuan
              </a>{' '}
              dan{' '}
              <a href="/kebijakan-privasi" className="text-[#FF6B35] hover:underline" target="_blank">
                Kebijakan Privasi
              </a>{' '}
              SkillHub Indonesia
            </label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-500">{errors.consent.message}</p>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={() => trackButtonClick('Daftar Sekarang')}
            className="w-full py-3 px-6 bg-[#FF6B35] text-white rounded-lg hover:bg-[#ff5722] transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Mengirim...' : 'Daftar Sekarang'}
          </button>

          {/* Security Note */}
          <div className="flex items-center justify-center text-sm text-gray-500">
            <Lock size={16} className="mr-2" />
            <span>Data Anda aman dan tidak akan dibagikan kepada pihak ketiga</span>
          </div>
        </form>
      </div>
    </div>
  );
}
