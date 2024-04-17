import styled from "styled-components";


const Button = styled.div`
    width: 133px;
    height: 48px;
    margin: 50px 0px 0px 0px;
    background-color:  rgba(223, 255, 132, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`

const Title = styled.div`
    width: 358px;
    height: 101px;
    font-size: 56px;
    margin: 100px 0px 0px;
    color: rgba(254, 252, 245, 1);
`

const TrashImg = styled.div`
`

const Description = styled.div`
    width: 433px;
    height: 108px;
    font-size: 17px;
    margin: 40px 0px 0px;
    color: rgba(254, 252, 245, 1);
`

const InfoTrash = styled.div`
`

const Block = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: rgba(50, 112, 82, 1);
`

const Trash = () => {
    return(
        <>
            <Block>
                <TrashImg>
                    <img src="./trashBasket.png" alt="" />
                </TrashImg>
                <InfoTrash>
                    <Title>No more nasty trash</Title>
                    <Description>
                        Instead of throwing kitchen scraps away, throw them in the bin that 
                        comes with your Mill Membership. It dries, shrinks, and de-stinks 
                        everything overnight. No weird smells. No drippy bags. No wasted food.
                    </Description>
                    <Button>Meet the bin</Button>
                </InfoTrash>
            </Block>
        </>
    );
}

export default Trash;