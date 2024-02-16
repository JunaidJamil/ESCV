import Container from "../components/shared/container";

const ProjectDetailsContainer = (props) => {
    const { children } = props;
    return (
        <Container>
            <div className="px-5 py-5">
                <span className="text-[30px] font-semibold font-['Montserrat'] text-[#061A2D]">
                    PROJECT DETAILS
                </span>
            </div>
            <div className="flex flex-col gap-48">
                {children}
            </div>
        </Container>
    )
}

export default ProjectDetailsContainer;