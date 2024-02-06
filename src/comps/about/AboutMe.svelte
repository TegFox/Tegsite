<script>
    import Me from '../../assets/me.png'
    import MeMobile from '../../assets/me_mobile.png'
    import Card from "$lib/Cards/Card.svelte";
    import bg from "../../assets/about_bg3.png"
    import Links from "./Links.svelte";
    import SideBySideUneven from "../../lib/SideBySideUneven.svelte";
    import ReactiveComp825 from "$lib/ReactiveComp825.svelte"
</script>



<Card background={`url(${bg})`} padding="1rem">
    <div class="col-center">
        <SideBySideUneven leftWidth="296px" gap="0" width="1080px" mobileGap="0" leftZ="1" rightZ="0">
            <div slot="left" class="col-center">
                <ReactiveComp825>
                    <div slot=main>
                        <img src={Me} alt="Teg" style:width='296px'/>
                    </div>
                    <div slot=alt>
                        <img src={MeMobile} alt="Teg" style:width='296px' style:margin-bottom='-50px'/>
                    </div>
                </ReactiveComp825>
            </div>

            <div slot="right" style:z-index="-10">
                <Card background="#000000dd" padding="1.5rem" >
                    <div class="h2">
                        Hey, I'm Teg!
                    </div>
                    <div class="about-p">
                        <p>
                            I'm a Chinese American artist drawing furries and anthropomorphic animals! My interest in
                            art and drawing started in mid 2018, I started doing freelance work in the beginning of 2020,
                            and my work has only been improving since!
                        </p>
                        <p>
                            Beyond art and other furry stuff, I'm currently studying Computer Science at
                            Georgia Tech, and doing photography and graphic design. In my free time I also do lots of
                            exploring, traveling, and urbanism/transit advocacy!
                        </p>
                    </div>
                    <div style:margin="3rem"></div>
                    <Links/>
                </Card>

            </div>
        </SideBySideUneven>
    </div>
</Card>

