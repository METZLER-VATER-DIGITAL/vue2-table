<template>
    <div :class="['vue2-table-pagination-info', css.infoClass]" v-html="paginationInfo">
    </div>
</template>

<script>
import PaginationInfoMixin from './Vue2TablePaginationInfoMixin.vue'

export default {
    mixins: [PaginationInfoMixin],
}
</script>
