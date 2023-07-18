<template>
    <div :class="[css.wrapperClass]">
        <a @click="loadPage('prev')" :class="[css.linkClass, { [css.disabledClass]: isOnFirstPage }]">
            <i :class="css.icons.prev"></i>
        </a>

        <select 
            :class="['vue2-table-pagination-dropdown', css.dropdownClass]"
            @change="loadPage($event.target.selectedIndex + 1)"
        >
            <option v-for="n in totalPage" :class="[css.pageClass]" :value="n" :selected="isCurrentPage(n)">
                {{ pageText }} {{ n }}
            </option>
        </select>

        <a @click="loadPage('next')" :class="[css.linkClass, { [css.disabledClass]: isOnLastPage }]">
            <i :class="css.icons.next"></i>
        </a>
    </div>
</template>

<script>
import PaginationMixin from './Vue2TablePaginationMixin.vue'

export default {
    mixins: [PaginationMixin],

    props: {
        pageText: {
            type: String,
            default() {
                return 'Page'
            }
        }
    },

    methods: {
        updatePagination(tablePagination) {
            this.setPaginationData(tablePagination)
        },
    },

    created() {
        this.$on('vue2-table:pagination-data', this.updatePagination)
    },

    destroyed() {
        this.$off('vue2-table:pagination-data', this.updatePagination)
    }
}
</script>
