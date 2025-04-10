import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface SeriesRowProps {
	category: string;
}

export default function SeriesRow({ category }: SeriesRowProps) {
	// Datos de ejemplo - en una implementación real, estos vendrían de una API
	const seriesData = {
		"personal-development": [
			{ id: 1, title: "Atomic Habits", author: "James Clear", format: ["Documental", "Animado"] },
			{ id: 2, title: "La Estrategia Emergente", author: "Alejandor Salazar", format: ["Documental", "Cine", "Animado"] },
			{ id: 3, title: "Mindset", author: "Carol Dweck", format: ["Actores Reales", "Animado"] },
			{ id: 4, title: "Deep Work", author: "Cal Newport", format: ["Documental"] },
			{ id: 5, title: "Grit", author: "Angela Duckworth", format: ["Actores Reales"] },
		],
		innovation: [
			{ id: 6, title: "Zero to One", author: "Peter Thiel", format: ["Documental"] },
			{ id: 7, title: "The Innovator's Dilemma", author: "Clayton Christensen", format: ["Animado"] },
			{ id: 8, title: "Creativity, Inc.", author: "Ed Catmull", format: ["Documental", "Actores Reales"] },
			{ id: 9, title: "The Lean Startup", author: "Eric Ries", format: ["Documental"] },
			{ id: 10, title: "Where Good Ideas Come From", author: "Steven Johnson", format: ["Animado"] },
		],
		business: [
			{ id: 11, title: "Good to Great", author: "Jim Collins", format: ["Documental"] },
			{ id: 12, title: "Start with Why", author: "Simon Sinek", format: ["Documental", "Animado"] },
			{ id: 13, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", format: ["Actores Reales"] },
			{ id: 14, title: "Built to Last", author: "Jim Collins", format: ["Documental"] },
			{ id: 15, title: "Principles", author: "Ray Dalio", format: ["Animado", "Documental"] },
		],
		science: [
			{ id: 16, title: "Sapiens", author: "Yuval Noah Harari", format: ["Animado", "Documental"] },
			{ id: 17, title: "A Brief History of Time", author: "Stephen Hawking", format: ["Animado"] },
			{ id: 18, title: "The Gene", author: "Siddhartha Mukherjee", format: ["Documental"] },
			{ id: 19, title: "Cosmos", author: "Carl Sagan", format: ["Documental", "Animado"] },
			{ id: 20, title: "The Hidden Life of Trees", author: "Peter Wohlleben", format: ["Documental"] },
		],
	};

	// Imágenes de libros
	const bookImages: Record<string, string> = {
		"Atomic Habits": "/atomic-habits.png",
		"La Estrategia Emergente": "/la_estrategia_emergente.png",
		Mindset: "/books/mindset.jpg",
		"Deep Work": "/books/deep-work.jpg",
		Grit: "/books/grit.jpg",
		"Zero to One": "/books/zero-to-one.jpg",
		"The Innovator's Dilemma": "/books/innovators-dilemma.jpg",
		"Creativity, Inc.": "/books/creativity-inc.jpg",
		"The Lean Startup": "/books/lean-startup.jpg",
		"Where Good Ideas Come From": "/books/good-ideas.jpg",
		"Good to Great": "/books/good-to-great.jpg",
		"Start with Why": "/books/start-with-why.jpg",
		"Thinking, Fast and Slow": "/books/thinking-fast-slow.jpg",
		"Built to Last": "/books/built-to-last.jpg",
		Principles: "/books/principles.jpg",
		Sapiens: "/books/sapiens.jpg",
		"A Brief History of Time": "/books/brief-history.jpg",
		"The Gene": "/books/the-gene.jpg",
		Cosmos: "/books/cosmos.jpg",
		"The Hidden Life of Trees": "/books/hidden-life-trees.jpg",
	};

	// Imágenes de respaldo
	const fallbackImages = [
		"https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg",
		"https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg",
		"https://cdn.pixabay.com/photo/2015/12/19/20/32/paper-1100254_1280.jpg",
		"https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_1280.jpg",
		"https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg",
		"https://cdn.pixabay.com/photo/2015/09/05/07/28/writing-923882_1280.jpg",
		"https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_1280.jpg",
		"https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
	];

	const getBookImage = (title: string) => {
		// Si existe una imagen específica para el libro, la usamos
		if (bookImages[title]) {
			return bookImages[title];
		}

		// Si no, usamos una imagen de respaldo aleatoria
		const randomIndex = Math.floor(Math.random() * fallbackImages.length);
		return fallbackImages[randomIndex];
	};

	const series = seriesData[category as keyof typeof seriesData] || [];

	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
			{series.map((item) => (
				<Link href={`/series/${item.id}`} key={item.id} className='group'>
					<div className='relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-105'>
						<Image
							src={getBookImage(item.title)}
							alt={item.title}
							width={180}
							height={250}
							className='w-full object-cover aspect-[2/3]'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3'>
							<h3 className='font-bold line-clamp-2 text-white'>{item.title}</h3>
							<p className='text-sm text-gray-100'>{item.author}</p>
							<div className='flex flex-wrap gap-1 mt-2'>
								{item.format.map((fmt) => (
									<Badge key={fmt} variant='outline' className='text-xs border-fuchsia-500 text-fuchsia-300'>
										{fmt}
									</Badge>
								))}
							</div>
						</div>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<button className='absolute top-2 right-2 bg-black/60 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'>
										<Info className='h-4 w-4' />
									</button>
								</TooltipTrigger>
								<TooltipContent side='top' className='bg-gray-900 border-gray-700 text-white'>
									<div className='text-sm'>
										<p className='font-bold'>{item.title}</p>
										<p className='text-xs'>Por {item.author}</p>
										<p className='text-xs mt-1'>Formatos: {item.format.join(", ")}</p>
									</div>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				</Link>
			))}
		</div>
	);
}
