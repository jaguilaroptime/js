<template>
  <VimePlayer>
    <!-- Provider component is placed here. -->
    <VimeVideo crossOrigin="" poster="https://media.vimejs.com/poster.png">
      <!-- These are passed directly to the underlying HTML5 `<video>` element. -->
      <!-- Why `data-src`? Lazy loading, you can always use `src` if you prefer.  -->
      <source 
        data-src="https://media.vimejs.com/720p.mp4" 
        type="video/mp4" 
      />
      <track 
        default 
        kind="subtitles" 
        src="https://media.vimejs.com/subs/english.vtt" 
        srclang="en" 
        label="English" 
      />
    </VimeVideo>

    <VimeDefaultUi noControls>
      <!-- We setup the default controls and pass in any options. -->
      <VimeDefaultControls
        hideOnMouseLeave
        :activeDuration="2000"
      />
    </VimeDefaultUi>
    
  </VimePlayer>
</template>

<script>
  import { VimePlayer,  VimeVideo, VimeDefaultUi , VimeDefaultControls} from '@vime/vue';

  export default {
    name: 'Player',
    components: {
      VimePlayer,
      VimeVideo,
      VimeDefaultUi,
      VimeDefaultControls
    },
  };
</script>