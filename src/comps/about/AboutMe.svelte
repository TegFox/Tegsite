<script>
    import Me from '../../assets/me.png'
    import Card from "../../lib/Card.svelte";
    import bg from "../../assets/about_bg3.png"
    import Links from "./Links.svelte";
    import SideBySideUneven from "../../lib/SideBySideUneven.svelte";
</script>



<Card background={`url(${bg})`} padding="1rem">
    <div class="col-center">
        <SideBySideUneven leftWidth="296px" gap="1rem" width="1000px" mobileGap="0">
            <div slot="left" class="col-center">
                <img src={Me} style:width='296px'/>
            </div>

            <div slot="right">
                <Card background="#00000088" padding="1.5rem">
                    <div class="h2">
                        Hi! I'm Teg!
                    </div>
                    <div class="about-p">
                        <p>
                            I'm a Chinese American artist drawing furries and anthropomorphic animals! My interest in
                            art and drawing started in mid 2018, I started doing freelance work in the beginning of 2020,
                            and my work has only been improving since!
                        </p>
                        <p>
                            Beyond art and other furry stuff, I'm currently studying Computer Science at
                            Georgia Tech. I also enjoy taking photos, looking at branding standards,
                            making simple graphic designs, tinkering with electronics, and programming!
                        </p>
                    </div>
                    <div style:margin="3rem"></div>
                    <Links/>
                </Card>

            </div>
        </SideBySideUneven>
    </div>
</Card>

