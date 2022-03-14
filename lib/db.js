import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: 'test2.easy2gift.co.ke',
    port: '3306',
    database:'easygift_jendieplus',
    user:'easygift_ujendieplus',
    password:"ami-03d5494fce077d227"
  
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
