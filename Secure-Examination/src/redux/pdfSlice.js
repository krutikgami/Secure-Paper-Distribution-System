// pdfReducer.js
import { FETCH_PDFS, UPLOAD_PDF, PDF_DELETE, PASSWORD_SUCCESS, PDF_FAILURE } from '../redux/actions';

const initialState = {
  pdfs: [],
  successpdf: [],
  error: null,
  loading: false,
};

const pdfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PDFS:
      return { ...state, pdfs: action.payload };
    case UPLOAD_PDF:
      return { ...state, pdfs: [...state.pdfs, action.payload] };
    case PDF_DELETE:
      return { ...state, pdfs: state.pdfs.filter(pdf => pdf._id !== action.payload) };
    case PASSWORD_SUCCESS:
      return { ...state, successpdf: [...state.successpdf, action.payload] };
    case PDF_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default pdfReducer;
