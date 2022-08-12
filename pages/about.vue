<template>

    <v-container class="text-center pa-md-10 pa-10 abcd">
        <Navigation />
        <v-row class="text-center">
            <v-col lg="6">
                <h1>ዓባይ ኤጀንሲ Abay Agency</h1>
                <pre>
                ዘመናዊና ፕሮፌሽናል ግብይቶች እንዲካሄዱ አስፈላጊ መረጃዎችን 
                ለገዥና ለሻጭ በማድረስ የተሳለጠ የገበያ ሥርዓት
                እንዲፈጠር ይሠራል፡፡ 
                </pre>
            </v-col>
            <v-col lg="6">
                <ul>

                    <h2>የምንሰጣቸው አገልግሎቶች</h2>

                    <li>
                        የቤትና የሕንፃ ሽያጭና ኪራይ
                    </li>
                    <li>
                        የባንክና አክሲዮኖች ሽያጭ
                    </li>
                    <li>
                        የመኪና ሽያጭና ኪራይ
                    </li>
                    <li>
                        የኢንቨስትመንት ማማከር
                    </li>
                    <li>
                        ☎️ 0911248597/0940599595 ይደውሉ
                    </li>
                    <li>
                        አድራሻ፡ መገናኛ ደራርቱ ሕንፃ 2ኛ ፎቅ ቢሮ ቁ 226
                    </li>
                </ul>
            </v-col>
        </v-row>
        <v-parallax src="http://e-abay.com/wp-content/uploads/2021/11/photo_2020-12-21_19-10-34.jpg"></v-parallax>
        <br><br><br><br>
    </v-container>
</template>
<script>
export default {
    name: "aboute",
};
</script>
<style scoped>
h1 {

    font-size: xx-large;
    color: blue
}

li {
    font-size: 20px
}

.abcd {
    font-weight: bolder;
    color: green;
    font-size: large;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0%;
    background-size: cover;
    transform: scale(1.1);
}
</style>
