
export interface Content {
    id: number;
    uri: string;
    title: string;
    content: string;
    image: string;
    category: Category;
    created_at: string;
    content_preview: string;
}

interface Category { 
    id: number;
    slug: string;
    name: string;
}