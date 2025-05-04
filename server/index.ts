import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

const PROTO_PATH = path.join(__dirname, "proto/twitter.proto");

// proto 読み込み
const packageDef = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const grpcObj = grpc.loadPackageDefinition(packageDef) as any;
const twitter = grpcObj.TwitterClone;

// メモリ上に投稿を保存
const tweets: any[] = [];

const server = new grpc.Server();

server.addService(twitter.service, {
  PostTweet: (call: any, callback: any) => {
    const tweet = {
      id: Date.now().toString(),
      author: call.request.author,
      content: call.request.content,
      timestamp: new Date().toISOString(),
    };
    tweets.unshift(tweet); // 新しい順に追加
    callback(null, { id: tweet.id, timestamp: tweet.timestamp });
  },

  GetTimeline: (call: any, callback: any) => {
    callback(null, { tweets: tweets.slice(0, 10) });
  },
});

const PORT = 50051;
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log(`✅ gRPC server running on port ${PORT}`);
});
