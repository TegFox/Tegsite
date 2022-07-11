<script>
    import Me from '../../assets/me.png'
    import Card from "../../lib/Card.svelte";
    import bg from "../../assets/about_bg3.png"
    import Links from "./Links.svelte";
    import SideBySideUneven from "../../lib/SideBySideUneven.svelte";

    let outerWidth
    const breakpoint = 1000

    let leftWidth = '320px'
    $: leftWidth = outerWidth >= breakpoint ? '320px' : '256px'

    let gap = '2rem'
    $: gap = outerWidth >= breakpoint ? '2rem' : '1rem'



</script>

<svelte:window bind:outerWidth/>

<Card background={`url(${bg})`}>
    <div class="col-center">
        <SideBySideUneven {leftWidth} {gap} width="1200px" mobileGap="0">
            <div slot="left" class="col-center">
                <img src={Me} style:width={leftWidth}/>
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
                    <div style:margin="3rem"></div>
                    <Links/>
                </Card>

            </div>
        </SideBySideUneven>
    </div>
</Card>

