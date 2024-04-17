import styled from "styled-components";

const MemberBlock = styled.div`
    background-color: rgba(226, 218, 198, 1);
    display: flex;
    justify-content: center;
`

const Title = styled.div`
    width: 733px;
    height: 72px;
    font-size: 70px;
    color: rgba(78, 38, 13, 1);
    margin: -600px 0px 0px 400px
`

const Description = styled.div`
    width: 733px;
    height: 72px;
    font-size: 24px;
    color: rgba(78, 38, 13, 1);
    margin: 50px 0px 0px 450px
`

const Button = styled.div`
    width: 165px;
    height: 64px;
    font-size: 17px;
    color: rgba(248, 244, 235, 1);
    margin: 50px 0px 0px 700px;
    background-color: rgba(0, 148, 94, 1);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Member = () => {
    return(
        <>
        <MemberBlock>
            <img src="./img/fruits.png" alt="" />
        </MemberBlock>
        <Title>Become a Mill member</Title>
        <Description>Reserve a bin. De-stink your kitchen. Stop wasting food.</Description>
        <Button>Reserve now</Button>
        </>
    );
}

export default Member;