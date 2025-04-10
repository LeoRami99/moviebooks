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
				<main className='container pt-24 pb-16'>
					<div className='max-w-4xl mx-auto text-center mb-12'>
						<h1 className='text-4xl font-bold mb-4'>Elige tu Plan</h1>
						<p className='text-xl text-gray-100'>
							Selecciona el plan que mejor se adapte a tus necesidades y comienza a disfrutar de nuestro contenido.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
						{/* Plan Básico */}
						<Card className='bg-gray-900 border-gray-800'>
							<CardHeader className='text-center pb-8'>
								<CardTitle className='text-2xl text-white'>Básico</CardTitle>
								<div className='mt-4'>
									<span className='text-4xl font-bold'>Gratis</span>
								</div>
							</CardHeader>
							<CardContent className='space-y-4'>
								<ul className='space-y-3'>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-500 mr-2 mt-0.5' />
										<span>Acceso limitado a la biblioteca (10 miniseries)</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-500 mr-2 mt-0.5' />
										<span>Formato estándar (solo documental)</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-500 mr-2 mt-0.5' />
										<span>Visualización con publicidad</span>
									</li>
									<li className='flex items-start text-gray-400'>
										<X className='h-5 w-5 text-red-500 mr-2 mt-0.5' />
										<span>Sin acceso a la comunidad</span>
									</li>
									<li className='flex items-start text-gray-400'>
										<X className='h-5 w-5 text-red-500 mr-2 mt-0.5' />
										<span>Sin acceso a eventos exclusivos</span>
									</li>
									<li className='flex items-start text-gray-400'>
										<X className='h-5 w-5 text-red-500 mr-2 mt-0.5' />
										<span>Sin descargas para ver sin conexión</span>
									</li>
								</ul>
							</CardContent>
							<CardFooter className='pt-6'>
								<Button variant='outline' className='w-full border-gray-700 hover:bg-gray-800 text-white'>
									Comenzar Gratis
								</Button>
							</CardFooter>
						</Card>

						{/* Plan Premium */}
						<Card className='bg-fuchsia-900 border-fuchsia-700 shadow-xl relative'>
							<div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
								<span className='bg-fuchsia-600 text-white px-4 py-1 rounded-full text-sm font-medium'>POPULAR</span>
							</div>
							<CardHeader className='text-center pb-8'>
								<CardTitle className='text-2xl text-white'>Premium</CardTitle>
								<div className='mt-4'>
									<span className='text-4xl font-bold'>$9.99</span>
									<span className='text-gray-100'>/mes</span>
								</div>
							</CardHeader>
							<CardContent className='space-y-4'>
								<ul className='space-y-3'>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-400 mr-2 mt-0.5' />
										<span>Acceso completo a la biblioteca</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-400 mr-2 mt-0.5' />
										<span>Todos los formatos disponibles (documental, animado, actores reales)</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-400 mr-2 mt-0.5' />
										<span>Sin publicidad</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-400 mr-2 mt-0.5' />
										<span>Acceso completo a la comunidad</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-400 mr-2 mt-0.5' />
										<span>Acceso a eventos mensuales</span>
									</li>
									<li className='flex items-start text-gray-100'>
										<X className='h-5 w-5 text-red-400 mr-2 mt-0.5' />
										<span>Descargas limitadas (5 por mes)</span>
									</li>
								</ul>
							</CardContent>
							<CardFooter className='pt-6'>
								<Button className='w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white'>Suscribirse</Button>
							</CardFooter>
						</Card>

						{/* Plan Familiar */}
						<Card className='bg-gray-900 border-gray-800'>
							<CardHeader className='text-center pb-8'>
								<CardTitle className='text-2xl text-white'>Familiar</CardTitle>
								<div className='mt-4'>
									<span className='text-4xl font-bold'>$14.99</span>
									<span className='text-gray-100'>/mes</span>
								</div>
							</CardHeader>
							<CardContent className='space-y-4'>
								<ul className='space-y-3'>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-500 mr-2 mt-0.5' />
										<span>Todo lo incluido en Premium</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-500 mr-2 mt-0.5' />
										<span>Hasta 5 perfiles</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-500 mr-2 mt-0.5' />
										<span>Descargas ilimitadas para ver sin conexión</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-500 mr-2 mt-0.5' />
										<span>Acceso a todos los eventos exclusivos</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-500 mr-2 mt-0.5' />
										<span>Contenido anticipado</span>
									</li>
									<li className='flex items-start'>
										<Check className='h-5 w-5 text-green-500 mr-2 mt-0.5' />
										<span>Soporte prioritario</span>
									</li>
								</ul>
							</CardContent>
							<CardFooter className='pt-6'>
								<Button variant='outline' className='w-full border-gray-700 hover:bg-gray-800 text-white'>
									Suscribirse
								</Button>
							</CardFooter>
						</Card>
					</div>

					{/* FAQ Section */}
					<div className='max-w-3xl mx-auto mt-20'>
						<h2 className='text-2xl font-bold mb-8 text-center'>Preguntas Frecuentes</h2>

						<div className='space-y-6'>
							<div>
								<h3 className='text-lg font-semibold mb-2'>¿Puedo cambiar de plan en cualquier momento?</h3>
								<p className='text-gray-100'>
									Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán inmediatamente y se
									ajustará el cobro de forma proporcional.
								</p>
							</div>

							<div>
								<h3 className='text-lg font-semibold mb-2'>¿Qué métodos de pago aceptan?</h3>
								<p className='text-gray-100'>
									Aceptamos tarjetas de crédito/débito, PayPal y transferencias bancarias en algunos países.
								</p>
							</div>

							<div>
								<h3 className='text-lg font-semibold mb-2'>¿Puedo cancelar mi suscripción cuando quiera?</h3>
								<p className='text-gray-100'>
									Sí, puedes cancelar tu suscripción en cualquier momento. Seguirás teniendo acceso al servicio hasta el final del
									período de facturación.
								</p>
							</div>

							<div>
								<h3 className='text-lg font-semibold mb-2'>¿Qué incluye el acceso a la comunidad?</h3>
								<p className='text-gray-100'>
									El acceso a la comunidad incluye participación en foros de discusión, clubes de lectura, eventos virtuales con
									autores y creadores, y la posibilidad de conectar con otros miembros con intereses similares.
								</p>
							</div>

							<div>
								<h3 className='text-lg font-semibold mb-2'>¿Ofrecen prueba gratuita?</h3>
								<p className='text-gray-100'>
									Sí, ofrecemos una prueba gratuita de 7 días para los planes Premium y Familiar. Puedes cancelar en cualquier
									momento durante este período sin cargo alguno.
								</p>
							</div>
						</div>
					</div>
				</main>

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
