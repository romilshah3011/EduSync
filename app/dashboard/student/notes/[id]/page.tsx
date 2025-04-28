export default function NotePage({ params }: { params: { id: string } }) {
  // Mock data for the note
  const note = {
    id: params.id,
    title: "Machine Learning Fundamentals",
    content: `
# Machine Learning Fundamentals

## Introduction to Machine Learning

Machine learning is a subset of artificial intelligence that focuses on developing systems that can learn from and make decisions based on data. Instead of explicitly programming rules, machine learning algorithms build models based on sample data to make predictions or decisions without being explicitly programmed to do so.

## Types of Machine Learning

### Supervised Learning

In supervised learning, the algorithm is trained on labeled data, meaning that each training example is paired with an output label. The goal is to learn a mapping from inputs to outputs.

**Examples:**
- Classification: Predicting a categorical label (e.g., spam detection)
- Regression: Predicting a continuous value (e.g., house prices)

### Unsupervised Learning

Unsupervised learning deals with unlabeled data. The algorithm tries to learn the inherent structure of the data without any explicit guidance.

**Examples:**
- Clustering: Grouping similar instances (e.g., customer segmentation)
- Dimensionality Reduction: Reducing the number of variables (e.g., PCA)

### Reinforcement Learning

Reinforcement learning involves an agent that learns to make decisions by taking actions in an environment to maximize some notion of cumulative reward.

**Examples:**
- Game playing (e.g., AlphaGo)
- Robotics control

## Common Algorithms

1. **Linear Regression**
   - Used for predicting continuous values
   - Assumes a linear relationship between input and output

2. **Logistic Regression**
   - Despite the name, used for binary classification
   - Outputs probability of belonging to a class

3. **Decision Trees**
   - Tree-like model of decisions
   - Simple to understand and interpret

4. **Random Forest**
   - Ensemble of decision trees
   - Reduces overfitting problem of decision trees

5. **Support Vector Machines (SVM)**
   - Effective in high-dimensional spaces
   - Works well when classes are separable

6. **K-Nearest Neighbors (KNN)**
   - Instance-based learning
   - Classification based on k closest training examples

7. **Neural Networks**
   - Inspired by the human brain
   - Deep learning is based on neural networks with many layers

## Model Evaluation

### Metrics for Classification
- Accuracy: Proportion of correct predictions
- Precision: Proportion of positive identifications that were actually correct
- Recall: Proportion of actual positives that were identified correctly
- F1 Score: Harmonic mean of precision and recall

### Metrics for Regression
- Mean Absolute Error (MAE)
- Mean Squared Error (MSE)
- Root Mean Squared Error (RMSE)
- R-squared

## Overfitting and Underfitting

- **Overfitting**: Model learns the training data too well, including noise
- **Underfitting**: Model is too simple to capture the underlying pattern

### Techniques to Prevent Overfitting
- Cross-validation
- Regularization
- Pruning
- Early stopping
- Dropout (for neural networks)

## Feature Engineering

Feature engineering is the process of using domain knowledge to
