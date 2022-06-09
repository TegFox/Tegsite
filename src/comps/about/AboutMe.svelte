<script>
    import SideBySide from "../../lib/SideBySide.svelte";
    import Me from '../../assets/me.png'
    import Card from "../../lib/Card.svelte";
    import bg from "../../assets/about_bg2.png"
</script>

<Card background={`url(${bg})`}>
    <div class="col-center">
        <SideBySide childWidth="600px" maxChildWidth="40vw" gap="1rem" mobileGap="0">
            <div slot="left" class="col-center">
                <img src={Me} style:width="320px"/>
            </div>

            <div slot="right">
                <Card background="#00000088" padding="2rem">
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
                </Card>
            </div>
        </SideBySide>
    </div>
</Card>

