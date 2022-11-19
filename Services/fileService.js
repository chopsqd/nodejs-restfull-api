import * as path from 'path'

class FileService {
    saveFile(file) {
        try {
            const fileName = Date.now() + '.jpg'
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return fileName
        } catch(err) {
            console.log(err)
        }
    }
}

export default new FileService()