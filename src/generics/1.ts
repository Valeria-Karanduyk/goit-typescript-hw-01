import axios from "axios";

type Todo = { userId: number; id: number; title: string; completed: boolean };

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error:any) {
    throw new Error(`Error fetching from ${url}: ${error.message || error}`);
  }
}

fetchData<Todo>("url");