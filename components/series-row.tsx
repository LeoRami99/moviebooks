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
			{ id: 3, title: "El Dilema", author: "Clayton M.", format: ["Película", "Animado", "Documental"] },
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
		"El Dilema": "eldilema.png",
		"Deep Work": "https://cdn.kobo.com/book-images/ab39cb3a-7057-41e7-89a7-0d7901bdd7fe/1200/1200/False/deep-work-2.jpg",
		Grit: "https://images.cdn1.buscalibre.com/fit-in/360x360/7c/e0/7ce050ce42f5222e07dae63d06ac833c.jpg",
		"Zero to One": "https://image.cdn1.buscalibre.com/5b5833b84463b5073d8b4569.RS500x500.jpg",
		"The Innovator's Dilemma": "https://images.cdn1.buscalibre.com/fit-in/360x360/81/16/8116a4ef1c472468e0a386649662831b.jpg",
		"Creativity, Inc.": "https://images.cdn3.buscalibre.com/fit-in/360x360/04/05/04056ceb07b3fbaa4c1d15d18584ca57.jpg",
		"The Lean Startup": "https://images.cdn3.buscalibre.com/fit-in/360x360/c1/fa/c1fa8375462b2287988d59a19f5a523e.jpg",
		"Where Good Ideas Come From": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1311705993i/8034188.jpg",
		"Good to Great": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovX_-sgJ-EinZeRicPhaNQGhfiXRh5vUG-Q&s",
		"Start with Why": "https://panamericana.vtexassets.com/arquivos/ids/488496/start-with-why-9781591846444.jpg?v=638150972570730000",
		"Thinking, Fast and Slow": "https://images.cdn2.buscalibre.com/fit-in/360x360/12/5d/125d2628c8e940bf066d5c91c0df18a8.jpg",
		"Built to Last": "https://images.cdn1.buscalibre.com/fit-in/360x360/77/fc/77fc6bfa591d8b44ad1d5f32749ca733.jpg",
		Principles: "https://m.media-amazon.com/images/I/61LKD6scbfL.jpg",
		Sapiens: "https://images.cdn2.buscalibre.com/fit-in/360x360/05/02/0502da9173d9e930003cfbad460bb725.jpg",
		"A Brief History of Time": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVSrhE4wPGcqVFkneyBbJ7gmSETtLGvpMJcw&s",
		"The Gene": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1452452965i/27276428.jpg",
		Cosmos: "https://images.cdn3.buscalibre.com/fit-in/360x360/e0/f2/e0f299b5184dddfb41d39724f75349b8.jpg",
		"The Hidden Life of Trees": "https://images.cdn1.buscalibre.com/fit-in/360x360/c4/b9/c4b99d234a3caf1f7331460ffe55610d.jpg",
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
