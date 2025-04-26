// backend/lib/verifyToken.js
import { adminAuth } from './firebase-admin.js'

export async function verifyToken(request) {
  
  const authHeader = request.headers.get('authorization')

  //if there is no token return null
  if (!authHeader || !authHeader.startsWith('Bearer ')){ 

    return null
  }

  const token = authHeader.split('Bearer ')[1]
  try {
    const decodedToken = await adminAuth.verifyIdToken(token)
    return decodedToken
  } catch (error) {
    return null
  }
}
