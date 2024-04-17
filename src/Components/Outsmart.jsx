import styled from "styled-components";

const Block = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: rgba(223, 237, 221, 1);
`
const BlockOutsmart = styled.div`
`

const Description = styled.div`
    width: 433px;
    height: 81px;
    margin: 50px 0px 0px 50px;
    font-size: 20px;
    color: rgba(78, 38, 13, 1);
`

const BlockLi = styled.div`
    width: 370px;
    height: 27px;
    margin: 50px 0px 0px 31px;
    font-size: 18px;
    color: rgba(78, 38, 13, 1);
`

const Title = styled.div`
    width: 399px;
    height: 101px; 
    margin: 100px 0px 0px 50px;
    font-size: 55px;
    color: rgba(78, 38, 13, 1);
`

const BlockImg = styled.div`
`

const Button = styled.div`
    width: 135px;
    height: 48px;
    margin: 50px 0px 0px 50px;
    background-color:  rgba(0, 148, 94, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`
const Li = styled.div`
`



const Outsmart = () => {
    return(
        <>
            <Block>
                <BlockOutsmart>
                    <Title>Outsmart waste from your home</Title>
                    <Description>The Mill Membership is a simple way to keep food out of landfills, send it back to farms, and make your kitchen smell awesome.</Description>
                    <BlockLi>
                        <Li>
                            <ol>
                                <li>Food-shrinking, de-stinking Mill kitchen bin</li>
                                <li>Seamless mail-back pathway to farms</li>
                                <li>Personalized impact tracking</li>
                            </ol>
                        </Li>
                    </BlockLi>
                    <Button>How it works</Button>
                </BlockOutsmart>
                <BlockImg>
                    <img src="./img/trash.png" alt="" />
                </BlockImg>
            </Block>
        </>
    );
}

export default Outsmart;