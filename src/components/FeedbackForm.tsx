
import React, { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import StarRating from './StarRating';
import { toast } from 'sonner';

const FeedbackForm = () => {
  const [rating, setRating] = useState(3);
  const [performaOption, setPerformaOption] = useState('normal');
  const [features, setFeatures] = useState<string[]>(['semua']);
  const [comment, setComment] = useState('');

  const handleFeatureChange = (feature: string) => {
    if (feature === 'semua') {
      setFeatures(['semua']);
    } else {
      const newFeatures = features.includes('semua')
        ? [feature]
        : features.includes(feature)
          ? features.filter(f => f !== feature)
          : [...features, feature];
      setFeatures(newFeatures);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Terima kasih atas umpan balik Anda!');
    // Reset form
    setRating(3);
    setPerformaOption('normal');
    setFeatures(['semua']);
    setComment('');
  };

  const handleCancel = () => {
    setRating(3);
    setPerformaOption('normal');
    setFeatures(['semua']);
    setComment('');
  };

  // Function to update the star rating and handle conditional logic
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold mb-4">Seberapa puaskah Anda dengan aplikasi NDS?</h1>
          <StarRating rating={rating} maxRating={5} onRatingChange={handleRatingChange} />
        </div>

        {/* Show these sections only when rating is 3 or less */}
        {rating <= 3 && (
          <>
            <div className="mb-6">
              <h2 className="font-semibold mb-3">Bagaimana Performa Jarkom?</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="normal"
                    name="performa"
                    value="normal"
                    checked={performaOption === 'normal'}
                    onChange={() => setPerformaOption('normal')}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="normal" className="text-gray-700">Normal</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="lambat"
                    name="performa"
                    value="lambat"
                    checked={performaOption === 'lambat'}
                    onChange={() => setPerformaOption('lambat')}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="lambat" className="text-gray-700">Lambat</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="timeout"
                    name="performa"
                    value="timeout"
                    checked={performaOption === 'timeout'}
                    onChange={() => setPerformaOption('timeout')}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="timeout" className="text-gray-700">Parah/Time Out</label>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold mb-3">Fitur di NDS apa yang dirasa lambat?</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="semua"
                    checked={features.includes('semua')}
                    onChange={() => handleFeatureChange('semua')}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="semua" className="text-gray-700">Semua Fitur</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="pembukaan"
                    checked={features.includes('pembukaan')}
                    onChange={() => handleFeatureChange('pembukaan')}
                    disabled={features.includes('semua')}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="pembukaan" className={`${features.includes('semua') ? 'text-gray-400' : 'text-gray-700'}`}>
                    Pembukaan Rekening
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="maintenance"
                    checked={features.includes('maintenance')}
                    onChange={() => handleFeatureChange('maintenance')}
                    disabled={features.includes('semua')}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="maintenance" className={`${features.includes('semua') ? 'text-gray-400' : 'text-gray-700'}`}>
                    Maintenance CIF
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cross"
                    checked={features.includes('cross')}
                    onChange={() => handleFeatureChange('cross')}
                    disabled={features.includes('semua')}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="cross" className={`${features.includes('semua') ? 'text-gray-400' : 'text-gray-700'}`}>
                    Cross Selling
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="other"
                    checked={features.includes('other')}
                    onChange={() => handleFeatureChange('other')}
                    disabled={features.includes('semua')}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="other" className={`${features.includes('semua') ? 'text-gray-400' : 'text-gray-700'}`}>
                    Fitur lainnya
                  </label>
                </div>
              </div>
            </div>
          </>
        )}

        {/* The comment section should also only show when rating is 3 or less */}
        {rating <= 3 && (
          <div className="mb-6">
            <h2 className="font-semibold mb-3">Komentar (optional)</h2>
            <Textarea
              placeholder="Berikan komentar Anda"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full min-h-[120px]"
            />
          </div>
        )}

        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
          >
            Batal
          </Button>
          <Button
            type="submit"
            className="bg-bri-blue hover:bg-bri-lightblue text-white"
          >
            Kirim
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
