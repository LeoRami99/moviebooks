import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Search, Sparkles } from "lucide-react";

export default function BrowsePage() {
	// Categorías
	const categories = [
		"Desarrollo Personal",
		"Innovación",
		"Negocios",
		"Ciencia",
		"Liderazgo",
		"Psicología",
		"Filosofía",
		"Tecnología",
		"Salud",
		"Finanzas",
	];

	// Libros agrupados por categoría
	const booksData = {
		desarrolloPersonal: [
			{ id: 1, title: "Atomic Habits", author: "James Clear", formats: ["Documental", "Animado"] },
			{ id: 2, title: "La Estrategia Emergente", author: "Alejandor Salazar", formats: ["Documental", "Cine", "Animado"] },
			{ id: 3, title: "Mindset", author: "Carol Dweck", formats: ["Actores Reales", "Animado"] },
			{ id: 4, title: "Deep Work", author: "Cal Newport", formats: ["Documental"] },
			{ id: 5, title: "Grit", author: "Angela Duckworth", formats: ["Actores Reales"] },
		],
		innovacion: [
			{ id: 6, title: "Zero to One", author: "Peter Thiel", formats: ["Documental"] },
			{ id: 7, title: "The Innovator's Dilemma", author: "Clayton Christensen", formats: ["Animado"] },
			{ id: 8, title: "Creativity, Inc.", author: "Ed Catmull", formats: ["Documental", "Actores Reales"] },
			{ id: 9, title: "The Lean Startup", author: "Eric Ries", formats: ["Documental"] },
			{ id: 10, title: "Where Good Ideas Come From", author: "Steven Johnson", formats: ["Animado"] },
		],
		negocios: [
			{ id: 11, title: "Good to Great", author: "Jim Collins", formats: ["Documental"] },
			{ id: 12, title: "Start with Why", author: "Simon Sinek", formats: ["Documental", "Animado"] },
			{ id: 13, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", formats: ["Actores Reales"] },
			{ id: 14, title: "Built to Last", author: "Jim Collins", formats: ["Documental"] },
			{ id: 15, title: "Principles", author: "Ray Dalio", formats: ["Animado", "Documental"] },
		],
		ciencia: [
			{ id: 16, title: "Sapiens", author: "Yuval Noah Harari", formats: ["Animado", "Documental"] },
			{ id: 17, title: "A Brief History of Time", author: "Stephen Hawking", formats: ["Animado"] },
			{ id: 18, title: "The Gene", author: "Siddhartha Mukherjee", formats: ["Documental"] },
			{ id: 19, title: "Cosmos", author: "Carl Sagan", formats: ["Documental", "Animado"] },
			{ id: 20, title: "The Hidden Life of Trees", author: "Peter Wohlleben", formats: ["Documental"] },
		],
	};

	// Mapeo de imágenes para cada libro específico
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

	// Imágenes de respaldo de Pixabay en caso de que no haya una imagen específica para el libro
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

	// Crear un array plano con todos los libros
	const allBooks = [...booksData.desarrolloPersonal, ...booksData.innovacion, ...booksData.negocios, ...booksData.ciencia].map((book) => {
		// Asignar categoría a cada libro
		let category;
		if (booksData.desarrolloPersonal.find((b) => b.id === book.id)) {
			category = "Desarrollo Personal";
		} else if (booksData.innovacion.find((b) => b.id === book.id)) {
			category = "Innovación";
		} else if (booksData.negocios.find((b) => b.id === book.id)) {
			category = "Negocios";
		} else {
			category = "Ciencia";
		}

		// Asignar imagen específica o de respaldo
		const image = bookImages[book.title] || fallbackImages[book.id % fallbackImages.length];

		return {
			...book,
			category,
			image,
		};
	});

	return (
		<div className='min-h-screen bg-gray-950 text-white'>
			{/* Navigation */}
			<div className='flex justify-center w-full'>
				<header className='fixed top-0 w-full z-50 bg-gradient-to-b from-gray-950/90 to-transparent'>
					<div className='container mx-auto flex items-center justify-between py-4 px-4 md:px-8'>
						<div className='flex items-center gap-8'>
							<Link href='/' className='flex items-center gap-2 text-2xl font-bold'>
								<Image src={"moviebook.png"} alt='Logo' width={40} height={40} className='size-[80px]' />
								{/* <span>MovieBooks</span> */}
							</Link>
							<nav className='hidden md:flex items-center gap-6'>
								<Link href='/browse' className='hover:text-fuchsia-400 transition'>
									Explorar
								</Link>
								<Link href='/categories' className='hover:text-fuchsia-400 transition'>
									Categorías
								</Link>
								<Link href='/community' className='hover:text-fuchsia-400 transition'>
									Comunidad
								</Link>
								<Link href='/my-list' className='hover:text-fuchsia-400 transition'>
									Mi Lista
								</Link>
							</nav>
						</div>
						<div className='flex items-center gap-4'>
							<Link href='/search' className='hover:text-fuchsia-400 transition'>
								Buscar
							</Link>
							<Link href='/plans' className='hover:text-fuchsia-400 transition'>
								Planes
							</Link>
							<Button asChild size='sm' variant='ghost' className='rounded-full'>
								<Link href='/profile'>
									<div className='flex items-center justify-center h-8 w-8 bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
											className='text-white'>
											<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
											<circle cx='12' cy='7' r='4'></circle>
										</svg>
									</div>
								</Link>
							</Button>
						</div>
					</div>
				</header>
			</div>

			{/* Main Content */}
			<div className='flex flex-col justify-center items-center'>
				<main className='container pt-24 pb-12'>
					<h1 className='text-3xl font-bold mb-8'>Explorar Biblioteca</h1>

					{/* Search and Filters */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
						<div className='relative'>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
							<Input placeholder='Buscar por título, autor...' className='pl-10 bg-gray-900 border-gray-700 text-white' />
						</div>
						<Select>
							<SelectTrigger className='bg-gray-900 border-gray-700 text-white'>
								<SelectValue placeholder='Categoría' />
							</SelectTrigger>
							<SelectContent className='bg-gray-900 border-gray-700 text-white'>
								<SelectItem value='all'>Todas las categorías</SelectItem>
								{categories.map((category) => (
									<SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
										{category}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger className='bg-gray-900 border-gray-700 text-white'>
								<SelectValue placeholder='Formato' />
							</SelectTrigger>
							<SelectContent className='bg-gray-900 border-gray-700 text-white'>
								<SelectItem value='all'>Todos los formatos</SelectItem>
								<SelectItem value='documentary'>Documental</SelectItem>
								<SelectItem value='animated'>Animado</SelectItem>
								<SelectItem value='live-action'>Actores Reales</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Category Pills */}
					<div className='flex flex-wrap gap-2 mb-8'>
						<Button variant='outline' className='rounded-full bg-fuchsia-600 border-0 hover:bg-fuchsia-700 text-white'>
							Todos
						</Button>
						{categories.map((category) => (
							<Button key={category} variant='outline' className='rounded-full border-gray-700 hover:bg-gray-800 text-black'>
								{category}
							</Button>
						))}
					</div>

					{/* Results */}
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
						{allBooks.map((book) => (
							<Link href={`/series/${book.id}`} key={book.id} className='group'>
								<div className='relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-105'>
									<Image src={book.image} alt={book.title} width={180} height={250} className='w-full object-cover aspect-[2/3]' />
									<div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3'>
										<h3 className='font-bold line-clamp-2 text-white'>{book.title}</h3>
										<p className='text-sm text-gray-100'>{book.author}</p>
										<div className='flex flex-wrap gap-1 mt-2'>
											{book.formats.map((format, idx) => (
												<Badge key={idx} variant='outline' className='text-xs border-fuchsia-500 text-fuchsia-300'>
													{format}
												</Badge>
											))}
											<Badge className='text-xs bg-fuchsia-600 text-white'>{book.category}</Badge>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>

					{/* Pagination */}
					<div className='flex items-center justify-center gap-2 mt-12'>
						<Button variant='outline' size='icon' className='border-gray-700 hover:bg-gray-800 text-white'>
							<ChevronLeft className='h-4 w-4' />
						</Button>
						{[1, 2, 3].map((page) => (
							<Button
								key={page}
								variant={page === 1 ? "default" : "outline"}
								size='icon'
								className={
									page === 1 ? "bg-fuchsia-600 hover:bg-fuchsia-700 text-white" : "border-gray-700 hover:bg-gray-800 text-black"
								}>
								{page}
							</Button>
						))}
						<Button variant='outline' size='icon' className='border-gray-700 hover:bg-gray-800 text-white'>
							<ChevronRight className='h-4 w-4' />
						</Button>
					</div>
				</main>
			</div>

			{/* Footer */}
			<footer className='bg-gray-950 border-t border-gray-800 py-10'>
				<div className='container'>
					<div className='flex flex-col md:flex-row justify-between'>
						<div className='mb-6 md:mb-0'>
							<Link href='/' className='flex items-center gap-2 text-xl font-bold mb-4'>
								<Sparkles className='h-5 w-5 text-fuchsia-500' />
								<span>MovieBooks</span>
							</Link>
							<p className='text-gray-300 max-w-md'>Transformando libros impactantes en experiencias visuales inmersivas.</p>
						</div>
						<div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
							<div>
								<h3 className='text-sm font-semibold mb-3 text-gray-100'>Explorar</h3>
								<ul className='space-y-2 text-gray-300'>
									<li>
										<Link href='/browse' className='hover:text-fuchsia-400'>
											Biblioteca
										</Link>
									</li>
									<li>
										<Link href='/categories' className='hover:text-fuchsia-400'>
											Categorías
										</Link>
									</li>
									<li>
										<Link href='/new' className='hover:text-fuchsia-400'>
											Novedades
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-sm font-semibold mb-3 text-gray-100'>Comunidad</h3>
								<ul className='space-y-2 text-gray-300'>
									<li>
										<Link href='/community' className='hover:text-fuchsia-400'>
											Club de Autores
										</Link>
									</li>
									<li>
										<Link href='/events' className='hover:text-fuchsia-400'>
											Eventos
										</Link>
									</li>
									<li>
										<Link href='/forum' className='hover:text-fuchsia-400'>
											Foro
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-sm font-semibold mb-3 text-gray-100'>Soporte</h3>
								<ul className='space-y-2 text-gray-300'>
									<li>
										<Link href='/help' className='hover:text-fuchsia-400'>
											Ayuda
										</Link>
									</li>
									<li>
										<Link href='/contact' className='hover:text-fuchsia-400'>
											Contacto
										</Link>
									</li>
									<li>
										<Link href='/faq' className='hover:text-fuchsia-400'>
											FAQ
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-300 text-sm'>
						<p>© 2025 MovieBooks. Todos los derechos reservados.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
