import { OpenAI } from 'langchain/llms/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { ConversationalRetrievalQAChain } from 'langchain/chains';

const CONDENSE_PROMPT = `Dada a conversa a seguir e uma pergunta de acompanhamento, reformule a pergunta de acompanhamento para ser uma pergunta independente.

Histórico de conversa:
{chat_history}
Comentarios adi: {question}
Pergunta independente:`;

const QA_PROMPT = `Voce é um assistente de IA especialista. Use as seguintes peças de contexto para responder à pergunta no final.
Se você não souber a resposta, apenas diga que não sabe. NÃO tente inventar uma resposta.
Se a pergunta não estiver relacionada ao contexto, responda educadamente que você está treinado para responder perguntas relacionadas à Resolução CVM 175, Instrução CVM 555 e o Ofício Circular CVM/SIN 02/23.

{context}

Pergunta: {question}
Resposta construtiva em markdown:`;

export const makeChain = (vectorstore: PineconeStore) => {
  const model = new OpenAI({
    temperature: 0, // increase temepreature to get more creative answers
    modelName: 'gpt-3.5-turbo', //change this to gpt-4 if you have access
  });

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorstore.asRetriever(),
    {
      qaTemplate: QA_PROMPT,
      questionGeneratorTemplate: CONDENSE_PROMPT,
      returnSourceDocuments: true, //The number of source documents returned is 4 by default
    },
  );
  return chain;
};
