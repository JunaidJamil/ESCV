const ProjectDetails = (props) => {
    const { className, id, title, supervisor, cosupervisor, team, domain, description, partners, sdg } = props;

    return (
        <div className={`${className} flex flex-col gap-3 px-10 text-[#061A2D] font-['Montserrat'] py-10 pb-5 border-black border-t border-b`}>
            <h1 id={id} className="text-[20px] font-bold underline">Title: {title}</h1>
            <div className="text-[16px]"><span className="font-extrabold">Supervisor:</span> {supervisor}</div>
            <div className="text-[16px]"><span className="font-extrabold">Co-supervisor:</span> {cosupervisor}</div>
            <div className="text-[16px]"><span className="font-extrabold">Team:</span> {team}</div>
            <div className="text-[16px]"><span className="font-extrabold">Domain:</span> {domain}</div>
            <div className="text-[16px]"><span className="font-extrabold">Description:</span> {description}</div>
            <div className="text-[16px]"><span className="font-extrabold">Partners:</span> {partners}</div>
            <div className="text-[16px]"><span className="font-extrabold">SDG:</span></div>
            <div className="flex gap-10 bg-gray-300 p-[10px] w-fit">
                {sdg?.length && sdg.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} className="w-[80px]" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectDetails;