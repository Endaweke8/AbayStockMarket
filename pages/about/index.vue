MULUNEH, [18/08/2022 10:25 ከሰዓት]
<template>
    <div>
        <v-container class="text-center pa-md-10 pa-10 px-15">
            <v-row class="text-center">
                <v-col lg="6" cols="12">
                    <h1 class="ml-10">ዓባይ ኤጀንሲ Abay Agency</h1>
                    <v-divider></v-divider>
                    <pre class="about text-justify mt-5">
                        ዘመናዊና ፕሮፌሽናል ግብይቶች እንዲካሄዱ አስፈላጊ መረጃዎችን ለገዥና ለሻጭ በማድረስ የተሳለጠ የገበያ ሥርዓት
                        እንዲፈጠር ይሠራል፡፡አክሲዮን ላይ ገንዘብወን ያፈሰሱ ኢንቨስተሮችም በቀላሉ ሐብታቸውን
                        ወደ ገንዘብ መቀየር ሲፈልጉ በወቅቱ የገበያ ዋጋ እንዲሸጡ የመገበያያ መድረክ(Market Place) ሆኖ ያገለግላል፡፡

                        Abay Security market works to make Share market
                        one potential investment option for investors in Ethiopia.
                        For those who have invested on share, Abay will serve as
                        a market place to change their asset to liquid money.
                    </pre>
                    <h3>Call Us</h3>
                    <p>
                        <v-icon color="indigo">
                            mdi-phone
                        </v-icon>
                        0911248597
                    </p>
                    <p>
                        <v-icon color="indigo">
                            mdi-phone
                        </v-icon>
                        0940599595
                    </p>
                </v-col>

            </v-row>
            <br>
            <br>
            <v-row justify="center">

                <v-img
                    src="https://scontent.fbjr1-1.fna.fbcdn.net/v/t1.6435-9/128017219_172342564596145_1310791303792031709_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gStx_93AtokAX_Vmbc2&_nc_ht=scontent.fbjr1-1.fna&oh=00_AT-jjbMavns07y47sKqnLoODB9M3oL36qX2XlyQ5dVTNJQ&oe=6323386A"
                    max-width="700">

                </v-img>


            </v-row>
            <br><br>

        </v-container>
        <AxionSlider />
    </div>
</template>
<script>
export default {
    head: {
    title: "Ethiopian Stock Market  About us",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Ethiopian Security Exchange",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },


};
</script>
<style scoped>
.about {
    font-size: 20px;
}
</style>