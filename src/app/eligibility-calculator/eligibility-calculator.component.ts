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
  currentStep = signal(0);

  eligibilityResult = signal<string | null>(null);

  answers = signal<Record<string, string>>({});

  questions = [
    {
      id: 'kickOf',
      text: 'Respondé una serie de preguntas para saber si está la posibilidad de ser ciudadano por ius sanguinis',
      options: [{ value: 'continue', label: 'Comenzar' }],
      validate: (answer: string) => answer === 'continue',
    },
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

  handleAnswer(answer: string) {
    const currentQuestion = this.questions[this.currentStep()];
    const updatedAnswers = { ...this.answers(), [currentQuestion.id]: answer };
    this.answers.set(updatedAnswers);

    if (!currentQuestion.validate(answer)) {
      this.eligibilityResult.set(this.getResultMessage(currentQuestion.id));
    } else if (this.currentStep() < this.questions.length - 1) {
      this.currentStep.update((step) => step + 1);
    } else {
      this.celebrate();
      this.eligibilityResult.set(
        '¡Felicidades! Parece que sos elegible para la ciudadanía italiana. Consultá los requisitos adicionales.'
      );
    }
  }

  getResultMessage(questionId: string): string {
    switch (questionId) {
      case 'bornInItaly':
        return 'Lamentablemente, no sos elegible porque tu ancestro italiano no nació en Italia.';
      case 'naturalizedBeforeChild':
        return 'Lamentablemente, tu ancestro italiano se naturalizó antes del nacimiento de su descendencia, lo que rompe la cadena de ciudadanía.';
      case 'maternalLineBefore1948':
        return 'No sos elegible debido a las restricciones en la transmisión de la ciudadanía por línea materna antes de 1948. Sin embargo, podés apelar en tribunales italianos.';
      case 'documentsAvailable':
        return 'No tenés toda la documentación necesaria para continuar. Te recomendamos comenzar a recopilar los documentos requeridos.';
      default:
        return 'No sos elegible para la ciudadanía italiana.';
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
