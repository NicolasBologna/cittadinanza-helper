import { Component, signal } from '@angular/core';
import { fadeAnimation } from './animations';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.scss'],
  animations: [fadeAnimation],
  imports: [CommonModule],
})
export class EligibilityCalculatorComponent {
  // Signal que controla la pregunta actual
  currentStep = signal(0);

  // Signal para el resultado final
  eligibilityResult = signal<string | null>(null);

  // Respuestas del usuario
  answers = signal<Record<string, string>>({});

  // Preguntas y validaciones
  questions = [
    {
      id: 'bornInItaly',
      text: '¿Tu ancestro italiano nació en Italia?',
      options: [
        { value: 'yes', label: 'Sí' },
        { value: 'no', label: 'No' },
      ],
      validate: (answer: string) => answer === 'yes',
    },
    {
      id: 'naturalizedBeforeChild',
      text: '¿Tu ancestro italiano se naturalizó antes de que naciera su hijo/a?',
      options: [
        { value: 'yes', label: 'Sí' },
        { value: 'no', label: 'No' },
      ],
      validate: (answer: string) => answer === 'no',
    },
    {
      id: 'maternalLineBefore1948',
      text: '¿Tu línea incluye una mujer que tuvo hijos antes de 1948?',
      options: [
        { value: 'yes', label: 'Sí' },
        { value: 'no', label: 'No' },
      ],
      validate: (answer: string) => answer === 'no',
    },
    {
      id: 'documentsAvailable',
      text: '¿Tienes los documentos necesarios para probar tu ascendencia?',
      options: [
        { value: 'yes', label: 'Sí' },
        { value: 'no', label: 'No' },
      ],
      validate: (answer: string) => answer === 'yes',
    },
  ];

  // Maneja la respuesta del usuario
  handleAnswer(answer: string) {
    const currentQuestion = this.questions[this.currentStep()];
    const updatedAnswers = { ...this.answers(), [currentQuestion.id]: answer };
    this.answers.set(updatedAnswers);

    // Valida la respuesta
    if (!currentQuestion.validate(answer)) {
      this.eligibilityResult.set(this.getResultMessage(currentQuestion.id));
    } else if (this.currentStep() < this.questions.length - 1) {
      this.currentStep.update((step) => step + 1);
    } else {
      this.celebrate();
      this.eligibilityResult.set(
        '¡Felicidades! Pareces ser elegible para la ciudadanía italiana. Consulta los requisitos adicionales.'
      );
    }
  }

  // Genera un mensaje personalizado en caso de no elegibilidad
  getResultMessage(questionId: string): string {
    switch (questionId) {
      case 'bornInItaly':
        return 'Lamentablemente, no eres elegible porque tu ancestro italiano no nació en Italia.';
      case 'naturalizedBeforeChild':
        return 'Lamentablemente, tu ancestro italiano se naturalizó antes del nacimiento de su descendencia, lo que rompe la cadena de ciudadanía.';
      case 'maternalLineBefore1948':
        return 'No eres elegible debido a las restricciones en la transmisión de la ciudadanía por línea materna antes de 1948. Sin embargo, puedes apelar en tribunales italianos.';
      case 'documentsAvailable':
        return 'No tienes toda la documentación necesaria para continuar. Te recomendamos comenzar a recopilar los documentos requeridos.';
      default:
        return 'No eres elegible para la ciudadanía italiana.';
    }
  }

  // Reinicia la calculadora
  resetCalculator() {
    this.currentStep.set(0);
    this.eligibilityResult.set(null);
    this.answers.set({});
  }

  celebrate() {
    confetti({
      particleCount: 2000, // Número de partículas
      spread: 360, // Ángulo de dispersión
      origin: { y: 0.6 }, // Posición de origen
    });
  }
}
