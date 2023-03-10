import Title from "./Title"

function Aboutme() {
	return (
		<div className="pb-40" id="overmij">
			<Title text="Over mij" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-8">
				<div className="text-slate-50 lg:col-start-2 lg:col-span-2">
					<p className="mb-4">
						Als laatstejaarsstudent software developer met een passie voor
						front-end, creëer ik gebruiksvriendelijke en mooie websites en
						webapplicaties. Met mijn vaardigheden in HTML, CSS, JavaScript en
						ervaring met React en Tailwind, ontwikkel ik interactieve en moderne
						interfaces. Bekijk mijn portfolio om te zien hoe ik mijn
						vaardigheden toepas en mijn passie voor software ontwikkeling
						uitdruk.
					</p>
					<p className="mb-4">
						Geïnteresseerd om samen te werken? Ik hoor graag van je!
					</p>
					<div className="flex gap-8 mt-4">
						<a
							href="#contact"
							className="px-1 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 text-slate-50 text-lg"
						>
							Contact
						</a>
						<a
							href="#projecten"
							className="px-1 py-2 bg-gray-500 border-b-2 border-r-2 border-gray-800 text-slate-50 text-lg"
						>
							Projecten
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Aboutme
