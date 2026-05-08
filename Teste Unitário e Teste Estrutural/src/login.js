function validateLogin(email, password) {
  // .trim() remove espaços acidentais no início/fim
  const cleanEmail = email?.toString().trim();
  const cleanPassword = password?.toString().trim();

  if (!cleanEmail) {
    return { success: false, message: 'E-mail é obrigatório' };
  }

  if (!cleanPassword) {
    return { success: false, message: 'Senha é obrigatória' };
  }

  if (cleanPassword.length < 6) {
    return { success: false, message: 'Senha deve ter no mínimo 6 caracteres' };
  }

  // Validação de formato de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return { success: false, message: 'E-mail inválido' };
  }

  return { success: true, message: 'Login válido' };
}

module.exports = { validateLogin };