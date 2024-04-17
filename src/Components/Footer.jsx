import styled from "styled-components";

const BlockFooter = styled.div`
    background-color: rgba(32, 73, 62, 1);
    height: 436px;
    margin: 290px 0px 0px 0px;
`

const MainBlock = styled.div`
    display: flex;
    justify-content: space-around;
`

const CompanyBlock = styled.div`
`

const Title = styled.div`
    width: 105px;
    height: 17px;
    font-size: 20px;
    color: rgba(223, 255, 132, 1);
    margin: 20px 0px 0px 0px;
`

const Page = styled.div`
    margin: 20px 0px 0px 0px;
    color: rgba(248, 244, 235, 1);
`

const HelpBlock = styled.div`
`

const PartnersBlock = styled.div`
`

const SocialMediaBlock = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 50px 0px 0px 0px;
    width: 150px;
`

const InfoBlock = styled.div`
`

const Service = styled.div`
    display: flex;
    justify-content: space-around;
    width: 400px;
    margin: 150px 0px 0px 102px;
    color: rgba(248, 244, 235, 1);
`

const PageService = styled.div`
`

const Copiright = styled.div`
    width: 800px;
    margin: 50px 0px 0px 123px;
    color: rgba(248, 244, 235, 1);
`

const Footer = () => {
    return(
        <>
        <BlockFooter>
            <MainBlock>
                <CompanyBlock>
                    <Title>Company</Title>
                    <Page>Team</Page>
                    <Page>Careers</Page>
                    <Page>Pressroom</Page>
                </CompanyBlock>
                <HelpBlock>
                    <Title>Help</Title>
                    <Page>FAQ</Page>
                    <Page>Help center</Page>
                    <Page>Contact us</Page>
                </HelpBlock>
                <PartnersBlock>
                    <Title>For Partners</Title>
                    <Page>Organizations</Page>
                    <Page>Municipalities</Page>
                    <Page>Communities</Page>
                </PartnersBlock>
                <SocialMediaBlock>
                    <div><img src="./img/instagram.svg" alt="" /></div>
                    <div><img src="./img/linkin.svg" alt="" /></div>
                    <div><img src="./img/tiktik.svg" alt="" /></div>
                    <div><img src="./img/facebook.svg" alt="" /></div>
                </SocialMediaBlock>
            </MainBlock>
            <InfoBlock>
                <Service>
                    <PageService>Terms of service</PageService>
                    <PageService>Trademarks</PageService>
                    <PageService>Privacy policy</PageService>
                </Service>
                <Copiright>Copyright © 2023 Mill Industries Inc. Mill, Mill Membership, Food Grounds , and related marks are trademarks of Mill.</Copiright>
            </InfoBlock>
        </BlockFooter>
        </>
    );
}

export default Footer;