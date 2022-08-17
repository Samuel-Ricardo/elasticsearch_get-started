import elasticsearch from 'elasticsearch'

export const getElasticSearchClient = () => new elasticsearch.Client({
    host: 'localhost:9200',
})
