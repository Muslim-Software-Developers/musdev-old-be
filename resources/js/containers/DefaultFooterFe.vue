<template>
      <TheFooter>
        <div>
          <!--footer-->
          <a href="https://coreui.io">MusDev</a>
          <span class="ml-1">&copy; 2020 Muslim Software Developers.</span>
        </div>
        <div class="ml-auto">
          <span class="mr-1">Powered by</span>
          <a href="https://musdev.org">Muslim Software Developers</a>
        </div>
      </TheFooter>
</template>
<script>
import { Footer as TheFooter } from '@coreui/vue'
export default {
  name: 'DefaultFooterFe',
  components: {
    TheFooter
  },
}
</script>
