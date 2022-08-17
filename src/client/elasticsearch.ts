import elasticsearch from 'elasticsearch'

export const getClient = () => new elasticsearch.Client({
    host: 'localhost:9200',
})
