// actions.js
import axios from 'axios';

export const FETCH_PDFS = 'FETCH_PDFS';
export const UPLOAD_PDF = 'UPLOAD_PDF';
export const PDF_DELETE = 'PDF_DELETE';
export const PASSWORD_SUCCESS = 'PASSWORD_SUCCESS';
export const PDF_FAILURE = 'PDF_FAILURE';

export const fetchPdfs = () => async dispatch => {
  const response = await fetch('/api/v1/users/fetchpdf',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch({ type: FETCH_PDFS, payload: response.data });
};

export const uploadPdf = (formData) => async dispatch => {
  const response = await fetch('/api/v1/users/uploadpdf', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  dispatch({ type: UPLOAD_PDF, payload: response.data });
};

export const deletePdf = (id) => async dispatch => {
  await axios.delete(`http://localhost:5000/files/${id}`);
  dispatch({ type: PDF_DELETE, payload: id });
};

export const passwordSuccess = (id) => ({
  type: PASSWORD_SUCCESS,
  payload: id,
});
