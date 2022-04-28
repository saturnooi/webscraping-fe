<template>
<div class="gallery_section">
    <div class="container">
      <div class="col-12 col-md-12 col-sm-12 col-12">
        <div class="gallery-heading">
          <h3><a href="javascript:;">Trending Destinations Hotels</a></h3>
          <p>
            Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis
            rutrum. Aenean id ullamcorper libero Vestibulum imperdiet <br />nibh
            vel magna lacinia commodo ultricies,
          </p>
        </div>
      </div>
      <div class="gallery_table">
        <ul id="tabs" class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="Show(1)"
              v-bind:class="{ active: showall }"
              >ทั้งหมด</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="Show(2)"
              v-bind:class="{ active: showAccident }"
              >เศรษฐกิจ</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="Show(3)"
              v-bind:class="{ active: showCrime }"
              >อาชญากรรม</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="Show(4)"
              v-bind:class="{ active: showPolitics }"
              >การเมือง</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="Show(5)"
              v-bind:class="{ active: showMedical }"
              >การแพทย์</a
            >
          </li>
        </ul>
      </div>
      <div id="content" class="tab-content" role="tablist">
        <div id="pane-A" class="card tab-pane fade show active" role="tabpanel">
          <!-- Note: New place of `data-parent` -->
          <div
            id="collapse-A"
            class="collapse show"
            data-parent="#content"
            role="tabpanel"
          >
            <div class="gallery-card-body">
              <div class="gallery_list">
                <div class="row">
                  <div
                    v-for="card in show"
                    :key="card"
                    class="col-lg-3 col-md-6 col-sm-12 col-12"
                  >
                    <div class="gallery_box">
                      <div class="sub-main">
                        <div class="img-sec p-rel">
                          <div class="hover-img p-rel">
                            <a v-bind:href="card.link"
                              ><img
                                v-bind:src="card.img"
                                alt="โรงแรม"
                                style="height: 195px"
                            /></a>
                          </div>

                        </div>
                        <div class="slider-content">
                
                          <h6>
                           <a v-bind:href="card.link" style="line-height:0.5;">{{ card.title }}</a>
                          </h6>
                          <p class = "mt-3" style="height: 100px; overflow: hidden;">
                           <a v-bind:href="card.link" style="font-size: 0.9vw">{{ card.subtitle[0]}}</a>
                          </p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      stateshow: 1,
      showall: true,
      showAccident: false,
      showCrime: false,
      showPolitics: false,
      showMedical: false,
      show: [],
    };
  },
  methods: {
    Show(state) {
      if (state == 1) {
        this.showall = true;
        this.show = this.All;
      } else this.showall = false;
      if (state == 2) {
        this.showAccident = true;
        this.show = this.Accident;
      } else this.showAccident = false;
      if (state == 3) {
        this.showCrime = true;
        this.show = this.Crime;
      } else this.showCrime = false;
      if (state == 4) {
        this.showPolitics = true;
        this.show = this.Politics;
      } else this.showPolitics = false;
      if (state == 5) {
        this.showMedical = true;
        this.show = this.Medical;
      } else this.showMedical = false;
    },
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/')

    const All = data.All
 
    const Accident = data.Accident 
    const Crime = data.Crime
    const Politics = data.Politics
    const Medical = data.Medical
    return {All, Accident, Crime, Medical, Politics,show : All}
}
}
</script>
