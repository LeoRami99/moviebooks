import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, X } from "lucide-react";

export default function PlansPage() {
	return (
		<div className='min-h-screen bg-gray-950 text-white'>
			{/* Navigation */}
			<header className='fixed top-0 w-full z-50 bg-gray-950'>
				<div className='container flex items-center justify-between py-4'>
					<Link href='/' className='flex items-center gap-2 text-2xl font-bold'>
						<Sparkles className='h-6 w-6 text-fuchsia-500' />
						<span>MovieBooks</span>
					</Link>
				</div>
			</header>

			<div className='flex flex-col justify-center items-center'>
				<section className='py-16 bg-gray-950'>
					<div className='container'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>Planes de Suscripción</h2>
							<p className='text-gray-100 max-w-2xl mx-auto'>
								Elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de nuestro contenido.
							</p>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='bg-gray-900 p-6 rounded-lg border border-gray-800'>
								<div className='text-center mb-6'>
									<h3 className='text-xl font-bold mb-2'>Lecto Basic</h3>
									<p className='text-3xl font-bold'>Gratis</p>
								</div>
								<ul className='space-y-3 mb-6'>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span> Acceso limitado a la biblioteca
									</li>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span> Formato estándar
									</li>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span> Con publicidad
									</li>
									<li className='flex items-center text-gray-400'>
										<span className='text-red-500 mr-2'>✗</span> Sin acceso a la comunidad
									</li>
								</ul>
								<Button variant='outline' className='w-full text-white'>
									Comenzar
								</Button>
							</div>
							<div className='bg-fuchsia-900 p-6 rounded-lg border border-fuchsia-700 transform scale-105 shadow-xl'>
								<div className='text-center mb-6'>
									<span className='bg-fuchsia-600 text-white px-2 py-0.5 text-sm rounded'>POPULAR</span>
									<h3 className='text-xl font-bold mt-2 mb-2'>Lectochill</h3>
									<p className='text-3xl font-bold'>
										$29.9000<span className='text-sm font-normal'>/mes</span>
									</p>
								</div>
								<ul className='space-y-3 mb-6'>
									<li className='flex items-center'>
										<span className='text-green-400 mr-2'>✓</span> Acceso completo a la biblioteca
									</li>
									<li className='flex items-center'>
										<span className='text-green-400 mr-2'>✓</span> Todos los formatos disponibles
									</li>
									<li className='flex items-center'>
										<span className='text-green-400 mr-2'>✓</span> Sin publicidad
									</li>
									<li className='flex items-center'>
										<span className='text-green-400 mr-2'>✓</span> Acceso a la comunidad
									</li>
								</ul>
								<Button className='w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>Suscribirse</Button>
							</div>
							<div className='bg-gray-900 p-6 rounded-lg border border-gray-800'>
								<div className='text-center mb-6'>
									<h3 className='text-xl font-bold mb-2'>Lectófilo</h3>
									<p className='text-3xl font-bold'>
										$59.900<span className='text-sm font-normal'>/mes</span>
									</p>
								</div>
								<ul className='space-y-3 mb-6'>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span> Todo lo de Premium
									</li>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span> Hasta 5 perfiles
									</li>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span> Descargas para ver sin conexión
									</li>
									<li className='flex items-center'>
										<span className='text-green-500 mr-2'>✓</span> Eventos exclusivos
									</li>
								</ul>
								<Button variant='outline' className='w-full text-white'>
									Suscribirse
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className='py-16 bg-gradient-to-b from-gray-950 to-fuchsia-950/30'>
					<div className='container text-center'>
						<h2 className='text-3xl font-bold mb-4'>¿Listo para transformar tu experiencia de aprendizaje?</h2>
						<p className='text-xl text-gray-100 max-w-2xl mx-auto mb-8'>
							Únete a miles de personas que están descubriendo una nueva forma de consumir conocimiento.
						</p>
						<Button size='lg' className='bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>
							Comenzar Ahora
						</Button>
					</div>
				</section>
			</div>

			{/* Main Content */}

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
