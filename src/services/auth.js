import { api } from "./api";

export async function enviarCodigo(contacto) {
  return api("/auth/enviar-codigo", {
    method: "POST",
    body: JSON.stringify({ contacto })
  });
}

export async function verificarCodigo(contacto, codigo) {
  return api("/auth/verificar-codigo", {
    method: "POST",
    body: JSON.stringify({ contacto, codigo })
  });
}
