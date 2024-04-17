import styled from "styled-components";

const Title = styled.h1`
    color: rgba(254, 252, 245, 1);
    font-size: 72px;
`;

const Description = styled.p`
    color: rgba(254, 252, 245, 1);
    font-size: 24px;
`;

const FoodTrashBlock = styled.div`
    margin-top: 350px;
    margin-left: 100px;
    font-family: Roboto-BlackItalic;
`;

const Button = styled.button`
    width: 162px;
    height: 48px;
    border-radius: 32px;
    background-color: rgba(223, 255, 132, 1);
    border: none;
    font-family: Roboto-BlackItalic;
    margin: -10px 0px 10px;
`;

const Header = () => {
    return(
        <>
            <div className="header">
                <FoodTrashBlock>
                    <Title>Food isn’t trash</Title>
                    <Description>Mill keeps it from stinking up your kitchen — and the planet.</Description>
                    <Button>
                        <img src="./img/play.svg" alt="" /> Watch video
                    </Button>
                </FoodTrashBlock>
            </div>
        </>
    );
}

export default Header;
