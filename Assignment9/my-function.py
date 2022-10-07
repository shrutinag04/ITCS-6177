def lambda_handler(event, context):
    # TODO implement
    keyword = ''
    if event['queryStringParameters']['keyword']:
        keyword = event['queryStringParameters']['keyword']
    return {
        'statusCode': 200,
        'body': 'Shruti Nagpure says ' + keyword
    }
