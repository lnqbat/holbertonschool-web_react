interface MajorCredits {
  credits: number;
  brand: 'Major';
}

interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

function sumMajorCredits(subject1: any, subject2: any) {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major'
  }
}

function sumMinorCredits(subject1: any, subject2: any) {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor'
  }
}
