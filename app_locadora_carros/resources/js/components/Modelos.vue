
<template>
    <div class="container">
        test
    </div>
</template>

<script>
import Paginate from './Paginate.vue'
export default {
    components: { Paginate },
    data() {
        return {
            urlBase: 'http://localhost:8000/api/v1/modelo',
            urlPaginacao: '',
            urlFiltro: '',
            nomeMarca: '',
            arquivoImagem: [],
            transacaoStatus: '',
            transacaoDetalhes: {},
            marcas: { data: [] },
            busca: { id: '', nome: '' }
        }
    },
    methods: {
        paginacao(l) {
            if(l.url) {
                //this.urlBase = l.url //ajustando a url de consulta com o parâmetro de página
                this.urlPaginacao = l.url.split('?')[1]
                this.carregarLista() //requisitando novamente os dados para nossa API
            }
        },
        carregarLista() {
            let url = this.urlBase + '?' + this.urlPaginacao + this.urlFiltro
            axios.get(url)
                .then(response => {
                    this.modelos = response.data
                    console.log(this.modelos)
                })
                .catch(errors => {
                    console.log(errors)
                })
        },
    },
    mounted() {
        this.carregarLista()
    }
}
</script>

<style>

</style>
