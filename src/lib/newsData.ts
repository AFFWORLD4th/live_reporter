export interface Article {
  id: number;
  title: string;
  category: string;
  img: string;
  time: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
  isBreaking?: boolean;
}

export const categories = [
  'Trending', 'Top News', 'General', 'Business', 'Tech', 'Health', 'Sports', 'Entertainment', 'Travel', 'Lifestyle', 'Education'
];

export const articles: Article[] = [
  {
    id: 999,
    title: "Vidarbha Heatwave Alert: IMD predicts record highs for Nagpur and districts.",
    category: "LATEST",
    img: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=1200&q=80",
    time: "APRIL 11, 2026",
    author: "Rahul Sharma",
    readTime: "5 MIN READ",
    excerpt: "The Indian Meteorological Department has issued a severe heatwave warning for the Vidarbha region, with Nagpur expected to cross 47°C this week.",
    content: "Nagpur and surrounding districts in the Vidarbha region are bracing for a severe heatwave as the Indian Meteorological Department (IMD) predicts record-breaking temperatures. Citizens are advised to stay indoors between 11 AM and 4 PM...",
    isBreaking: true
  },
  {
    id: 1,
    title: "Nagpur Metro reaches historic ridership milestone this festive season",
    category: "CITY NEWS",
    img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80",
    time: "2h ago",
    author: "Staff Reporter",
    readTime: "2 MIN READ",
    excerpt: "Over 2.5 lakh commuters used the metro in a single day, marking a significant shift in the city's public transport usage.",
    content: "The Nagpur Metro has recorded its highest-ever ridership during the recent festive celebrations. This milestone reflects the growing acceptance of the metro as a primary mode of transport for Nagpurians..."
  },
  {
    id: 2,
    title: "New Multi-speciality Hospital to open in Civil Lines by 2026",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
    time: "4h ago",
    author: "Priya Deshmukh",
    readTime: "3 MIN READ",
    excerpt: "The upcoming facility will feature world-class oncology and cardiology departments, catering to patients across Vidarbha.",
    content: "Residents of Nagpur will soon have access to advanced healthcare facilities as a new 500-bed multi-speciality hospital nears completion in Civil Lines..."
  },
  {
    id: 3,
    title: "Maharashtra Govt approves special fund for Nagpur Airport expansion",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=400&q=80",
    time: "6h ago",
    author: "Amit Verma",
    readTime: "4 MIN READ",
    excerpt: "The ₹2,000 crore expansion plan aims to turn Nagpur into a major national and international cargo hub.",
    content: "In a major boost for MIHAN, the state government has sanctioned funds for the long-awaited expansion of the Dr. Babasaheb Ambedkar International Airport..."
  },
  {
    id: 4,
    title: "City schools prepare for the upcoming Vidarbha level Science Quiz",
    category: "EDUCATION",
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
    time: "8h ago",
    author: "Rahul Sharma",
    readTime: "3 MIN READ",
    excerpt: "Over 50 schools will compete in the prestigious tournament held at VNIT Nagpur next month.",
    content: "Excitement is building among students in Nagpur as the dates for the inter-district science quiz competition have been announced..."
  },
  {
    id: 10,
    title: 'Breaking: Historical find during Nagpur Metro excavation',
    category: 'CITY HISTORY',
    img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80',
    time: 'Yesterday',
    author: 'Staff Reporter',
    readTime: '6 MIN READ',
    excerpt: 'Archaeological remains dating back to the Bhonsle era discovered near Sitabuldi station.',
    content: "Construction work at the Sitabuldi Metro interchange came to a temporary halt today following the discovery of ancient stone structures..."
  },
];

export const reels = [
  { id: 1, title: 'Morning walk at Futala Lake', plays: '12K', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80' },
  { id: 2, title: 'Nagpur Food Festival Highlights', plays: '45K', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
  { id: 3, title: 'Metro Station Architecture', plays: '8K', img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&q=80' },
  { id: 4, title: 'Tiger Capital Vibes', plays: '22K', img: 'https://images.unsplash.com/photo-1472396961695-1ad7a82efe12?w=400&q=80' },
  { id: 5, title: 'Rainy Day in Civil Lines', plays: '15K', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
];

export const galleryItems = [
  { id: 1, title: 'Futala Lake Fountain', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=402&q=80' },
  { id: 2, title: 'Zero Mile Pillar', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=402&q=80' },
  { id: 3, title: 'Metro Architecture', img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=402&q=80' },
  { id: 4, title: 'Tadoba Safari', img: 'https://images.unsplash.com/photo-1472396961695-1ad7a82efe12?w=402&q=80' },
  { id: 5, title: 'Ganesh Chaturthi', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=402&q=80' },
  { id: 6, title: 'Ambazari Lake', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=402&q=80' },
];

export const marketSummary = {
  indices: { sensex: '74,320.30', nifty: '22,453.30' },
  commodities: { gold: 72450, silver: 84200 }
};
