import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiService.request(endpoint, options);
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiService.request(endpoint, options);
      setData(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBooking = async (bookingData) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiService.createBooking(bookingData);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getAvailableSlots = async (date) => {
    try {
      const result = await apiService.getAvailableSlots(date);
      return result.data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return { createBooking, getAvailableSlots, loading, error };
};

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitContact = async (contactData) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiService.submitContact(contactData);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitContact, loading, error };
};