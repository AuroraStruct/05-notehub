import axios from 'axios';
import type { Note, CreateNoteParams } from '../types/note';

const BASE_URL = 'https://notehub-public.goit.study/api';
const NOTEHUB_TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${NOTEHUB_TOKEN}` },
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  search: string,
  page: number
): Promise<FetchNotesResponse> => {
  const response = await api.get<FetchNotesResponse>('/notes', {
    params: { ...(search !== '' && { search }), page, perPage: 12 },
  });
  return response.data;
};

export const createNote = async (noteData: CreateNoteParams): Promise<Note> => {
  const response = await api.post<Note>('/notes', noteData);
  return response.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const response = await api.delete<Note>(`/notes/${noteId}`);
  return response.data;
};
