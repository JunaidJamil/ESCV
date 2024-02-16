
import Container from "../components/shared/container";

const MSdetailscontainer = (props) => {
    const { children } = props;
    return (
        <Container>
            <div className="flex flex-col gap-48">
                {children}
            </div>
        </Container>
    )
}

export default MSdetailscontainer;